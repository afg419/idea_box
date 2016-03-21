require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  # before(:each) do
  #   seed_emotions_user_expanded_defaults
  # end

  it "replies with all indexed ideas" do
    create_ideas(3)
    get :index

    expect(response.body).to eq 105981
    expect(response.status).to eq 200
  end
end
