Rails.application.routes.draw do
  root "homes#show"

  namespace :api do
    namespace :v1 do
      resources :ideas do
        post '/vote', to: "ideas#vote"
      end
    end
  end
end
