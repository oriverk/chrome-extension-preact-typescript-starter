/* eslint-disable */

chrome.devtools.panels.create('Dev Tools from chrome-extension-boilerplate-react', 'icon.png', 'panel.html');

chrome.devtools.panels.elements.createSidebarPane('Font Properties', function (sidebar) {
  sidebar.setPage('Sidebar.html');
  sidebar.setHeight('8ex');
});
