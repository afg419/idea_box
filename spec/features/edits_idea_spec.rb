require 'rails_helper'

RSpec.feature "edits idea", type: :feature do
  scenario "A user edits an idea", :js => true do
    create_ideas(1)
    id = Idea.first.id
    title = Idea.first.title
    VCR.use_cassette 'edits-idea' do
      visit root_path

      within "#idea-#{id}" do
        expect(page).to have_content "Title0"
        find('.title').click
        within('.title') do
          find(:css, '.edit-idea-title').set("Title100")
        end
        find('.submit-edit-idea').click
        expect(page).to_not have_content "Title0"
        expect(page).to have_content "Title100"
      end
    end
  end
end
