
export class LandingPage {

	navigateToFindFriend = function() : void {
	
		if (browser.isExisting())
		{
			browser.click()
		}
		
		browser.setValue('//*[@id="searchString"]', 'cars for sale')
		browser.pause(10000);
	   	browser.click('//*[@id="findFriendsNav"]');
	}

	verifyLandingPage = function(): void {
		
	expect(browser.isVisible('//*[@id="SiteHeader_SiteTabs_browseDropDownLink"]')).toBeTruthy();
	expect(browser.isVisible('//*[@id="SiteHeader_SiteTabs_sellLink"]')).toBeTruthy();
	expect(browser.isVisible('//*[@id="SiteHeader_SiteTabs_myTradeMeDropDownLink"]')).toBeTruthy();
	expect(browser.isVisible('//*[@id="CommunityDropDown"]/a')).toBeTruthy();
	expect(browser.isVisible('//*[@id="SearchTabs1_MarketplaceAnchor"]')).toBeTruthy();
	expect(browser.isVisible('//*[@id="SearchTabs1_JobsAnchor"]')).toBeTruthy();
	expect(browser.isVisible('//*[@id="SearchTabs1_MotorsAnchor"]')).toBeTruthy();
	expect(browser.isVisible('//*[@id="SearchTabs1_PropertyAnchor"]')).toBeTruthy();
    } 

}
