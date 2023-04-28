/**
 * @package: Xeptrix
 * @module: MIME Types
 * @file: src/classes/html_types/mime_types.ts
 */

type MimeType = {
  name: string;
  mimeType: string;
};

export const MimeType: MimeType[] = [
  {name: 'atom', mimeType: 'application/atom+xml'},
  {name: 'json', mimeType: 'application/json'},
  {name: 'bin', mimeType: 'application/octet-stream'},
  {name: 'microdata_json', mimeType: 'application/microdata+json'},
  {name: 'rss', mimeType: 'application/rss+xml'},
  {name: 'form', mimeType: 'application/x-www-form-urlencoded'},
  {name: 'xhtml', mimeType: 'application/xhtml+xml'},
  {name: 'xml', mimeType: 'application/xml'},
  {name: 'gif', mimeType: 'image/gif'},
  {name: 'jpeg', mimeType: 'image/jpeg'},
  {name: 'png', mimeType: 'image/png'},
  {name: 'svg', mimeType: 'image/svg+xml'},
  {name: 'form_multipart', mimeType: 'multipart/form-data'},
  {name: 'mixed', mimeType: 'multipart/mixed'},
  {name: 'streaming_push', mimeType: 'multipart/x-mixed-replace'},
  {name: 'css', mimeType: 'text/css'},
  {name: 'server_sent_event_stream', mimeType: 'text/event-stream'},
  {name: 'javascript', mimeType: 'text/javascript'},
  {name: 'json_legacy', mimeType: 'text/json'},
  {name: 'plaint_text', mimeType: 'text/plain'},
  {name: 'html', mimeType: 'text/html'},
  {name: 'hyperlink_auditing', mimeType: 'text/ping'},
  {name: 'uri_list', mimeType: 'text/uri-list'},
  {name: 'vcard', mimeType: 'text/vcard'},
  {name: 'webvtt', mimeType: 'text/vtt'},
  {name: 'xml_text', mimeType: 'text/xml'},
  {name: 'video_mpeg4', mimeType: 'video/mp4'},
];
