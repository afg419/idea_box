require 'rails_helper'

RSpec.feature "deletes idea", type: :feature do
  scenario "A user deletes an idea", :js => true do
    create_ideas(3)
    VCR.use_cassette 'deletes-ideas' do
      visit root_path
      within('.ideas li:nth-child(1)') do
        expect(page).to have_content("Title2")
        click_on "Delete"
        expect(page).to_not have_content("Title2")
      end
    end
  end
end
