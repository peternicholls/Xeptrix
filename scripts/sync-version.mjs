import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const versionFilePath = path.join(rootDir, 'VERSION')
const packageJsonPath = path.join(rootDir, 'package.json')
const packageLockPath = path.join(rootDir, 'package-lock.json')
const checkOnly = process.argv.includes('--check')

async function readJson(filePath) {
  const fileContent = await readFile(filePath, 'utf8')
  return JSON.parse(fileContent)
}

async function writeJson(filePath, data) {
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

function updateRootPackageLockVersion(lockFile, version) {
  if (lockFile.version !== version)
    lockFile.version = version

  if (lockFile.packages?.['']?.version !== version)
    lockFile.packages[''].version = version
}

async function main() {
  const version = (await readFile(versionFilePath, 'utf8')).trim()

  if (!/^\d+\.\d+\.\d+$/.test(version))
    throw new Error(`VERSION must contain a SemVer value. Received "${version}".`)

  const packageJson = await readJson(packageJsonPath)
  const packageLock = await readJson(packageLockPath)

  const needsPackageJsonUpdate = packageJson.version !== version
  const needsPackageLockUpdate =
    packageLock.version !== version || packageLock.packages?.['']?.version !== version

  if (checkOnly) {
    if (needsPackageJsonUpdate || needsPackageLockUpdate)
      throw new Error(`Version files are out of sync with VERSION=${version}.`)

    return
  }

  packageJson.version = version
  updateRootPackageLockVersion(packageLock, version)

  await Promise.all([
    writeJson(packageJsonPath, packageJson),
    writeJson(packageLockPath, packageLock),
  ])
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
