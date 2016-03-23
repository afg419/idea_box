require 'rails_helper'

RSpec.feature "Sorts ideas", type: :feature do
  scenario "A user can sort ideas", :js => true do
    create_ideas(3)
    VCR.use_cassette 'sees-all-ideas' do
      visit root_path
      within('.ideas li:nth-child(1)') do
        expect(page).to have_content("Title2")
      end
      within('.ideas li:nth-child(2)') do
        expect(page).to have_content("Title1")
      end
      within('.ideas li:nth-child(3)') do
        expect(page).to have_content("Title0")
      end

      click_on "submit-sort-idea"

      within('.ideas li:nth-child(1)') do
        expect(page).to have_content("Title2")
      end
      within('.ideas li:nth-child(2)') do
        expect(page).to have_content("Title1")
      end
      within('.ideas li:nth-child(3)') do
        expect(page).to have_content("Title0")
      end

      click_on "submit-sort-idea"

      within('.ideas li:nth-child(1)') do
        expect(page).to have_content("Title0")
      end
      within('.ideas li:nth-child(2)') do
        expect(page).to have_content("Title1")
      end
      within('.ideas li:nth-child(3)') do
        expect(page).to have_content("Title2")
      end
    end
  end
end
