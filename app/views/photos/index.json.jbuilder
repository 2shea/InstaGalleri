json.array! @photo_data['data'] do |photo|
  next unless photo['images']['standard_resolution']['url'] &&
    photo['caption']
  json.url photo['images']['standard_resolution']['url']
  json.caption photo['caption']['text']
end