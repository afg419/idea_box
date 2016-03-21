require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  it "deletes an idea" do
    create_ideas(1)
    idea = Idea.first

    delete :destroy, id: idea.id

    expect(response.body).to eq "deleted idea #{idea.title}"
    expect(response.status).to eq 200
    expect(Idea.find_by(id: idea.id)).to eq nil
  end

  it "alerts user if idea didn't exist in the first place" do
    delete :destroy, id: 1

    expect(response.body).to eq "you didn't even have that idea."
    expect(response.status).to eq 200
  end

end
