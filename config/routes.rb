PhotoGallery::Application.routes.draw do
  get '/home' => 'static_pages#home'
  root :to => 'static_pages#home'
end
