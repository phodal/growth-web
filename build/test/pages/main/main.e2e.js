describe("Main", function () {
    browser.refresh();
    it("should skip tutorial", function () {
        element(by.css("ion-navbar ion-buttons .bar-button")).click()
            .then(function () {
            browser.driver.sleep(1000);
            expect(element(by.css(".main-view ion-navbar:first-child")).getText()).toContain("Growth");
        });
    });
    it("should have correct nav text for Home", function () {
        element(by.css(".main-view ion-card.day-0 button.item")).click()
            .then(function () {
            browser.driver.sleep(500);
            expect(element(by.css(".main-view .day-0 ion-list.item-accordion button.item")).getText()).toContain("Growth");
        });
    });
});
