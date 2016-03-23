require 'rails_helper'

RSpec.feature "votes on idea", type: :feature do
  scenario "A user votes on an idea", :js => true do
    create_ideas(1)
    id = Idea.first.id
    VCR.use_cassette 'votes-idea' do
      visit root_path
      within "#idea-#{id}" do
        expect(page).to have_content "swill"
        find('.upvote').click
        expect(page).to_not have_content "swill"
        expect(page).to have_content "plausible"
        find('.upvote').click
        expect(page).to_not have_content "plausible"
        expect(page).to have_content "genius"
        find('.downvote').click
        expect(page).to_not have_content "genius"
        expect(page).to have_content "plausible"
      end
    end
  end
end
