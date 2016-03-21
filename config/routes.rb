Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :ideas
      post '/vote', to: "ideas#vote"
    end
  end

end
