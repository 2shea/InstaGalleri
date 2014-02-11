class PhotosController < ApplicationController
  def index
    query_values = params
#       
    query_values["client_id"] = ENV["INSTAGRAM_CLIENT_ID"]
  
    p "this is query values"
    p query_values
      
    url = Addressable::URI.new(
      :scheme => "https",
      :host => "api.instagram.com",
      :path => "/v1/media/search",
      :query_values => query_values
    ).to_s
    
    @photo_data = JSON.parse(RestClient.get(url))
  end
end