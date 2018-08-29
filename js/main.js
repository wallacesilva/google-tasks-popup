browser.browserAction.onClicked.addListener((tab) => {
  
  var win_whastapp = browser.windows.create({
                        url: ['https://mail.google.com/tasks/ig'],
                        type: "panel",
                        height: 350,
                        width: 335
                    });

  // requires the "tabs" or "activeTab" permission
  console.log('Google Tasks Opened.');
});