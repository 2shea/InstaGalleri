json.array! @photo_data['data'] do |photo|
  json.url photo['images']['thumbnail']['url']
  if photo['caption']
    json.caption photo['caption']['text']
  end
end