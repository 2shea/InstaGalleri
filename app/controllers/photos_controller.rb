class PhotosController < ApplicationController
  def index
    query_values = params[:query_values] || 
    {"lat" => "37", 
      "lng" => "-122", 
      "client_id" => ENV["INSTAGRAM_CLIENT_ID"]}
    
    url = Addressable::URI.new(
      :scheme => "https",
      :host => "api.instagram.com",
      :path => "/v1/media/search",
      :query_values => query_values
    ).to_s
    
    @photo_data = JSON.parse(RestClient.get(url))
  end
end