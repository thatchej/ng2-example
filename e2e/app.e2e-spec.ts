import { Ng2ExamplePage } from './app.po';

describe('ng2-example App', function() {
  let page: Ng2ExamplePage;

  beforeEach(() => {
    page = new Ng2ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
