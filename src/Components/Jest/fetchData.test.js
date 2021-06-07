import FetchData from '../FetchData'
import events from '../events'

jest.mock('../FetchData');

test('mock 整个 FetchData模块', async () => {
  expect.assertions(2);
  await events.getPostList();
  expect(FetchData.fetchPostsList).toHaveBeenCalled();
  expect(FetchData.fetchPostsList).toHaveBeenCalledTimes(1);
});