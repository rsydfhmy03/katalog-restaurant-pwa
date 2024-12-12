/* eslint-disable no-undef */
import { createPostReviewEnvironment } from './helpers/testFactories';
import RestaurantSource from '../src/scripts/data/restaurant-source';
import UrlParser from '../src/scripts/routes/url-parser';

jest.mock('../src/scripts/data/restaurant-source');
jest.mock('../src/scripts/routes/url-parser');

describe('Customer Review Feature', () => {
  it('should successfully post a review and update the review list', async () => {
    // Mock API response
    const mockPostReviewResponse = {
      customerReviews: [
        {
          id: 'rqdv5juczeskfw1e867',
          name: 'John Doe',
          review: 'Great food!',
          date: '11 Desember 2024',
        },
      ],
    };

    RestaurantSource.postReview.mockResolvedValue(mockPostReviewResponse);

    UrlParser.parseActiveUrlWithoutCombiner.mockReturnValue({ id: 'rqdv5juczeskfw1e867' });

    const mockReview = await createPostReviewEnvironment();

    expect(RestaurantSource.postReview).toHaveBeenCalledWith({
      id: 'rqdv5juczeskfw1e867',
      name: 'John Doe',
      review: 'Great food!',
    });

    const reviewContainer = document.querySelector('.detail-review');
    expect(reviewContainer.innerHTML).toContain(mockReview.name);
    expect(reviewContainer.innerHTML).toContain(mockReview.review);
    expect(document.getElementById('inputName').value).toBe('');
    expect(document.getElementById('inputReview').value).toBe('');
  });

  it('should post review when input fields are filled', async () => {

    RestaurantSource.postReview = jest.fn();

    document.getElementById('inputName').value = 'John Doe';
    document.getElementById('inputReview').value = 'Great food!';
    await createPostReviewEnvironment();

    expect(RestaurantSource.postReview).toHaveBeenCalledWith({
      id: 'rqdv5juczeskfw1e867',
      name: 'John Doe',
      review: 'Great food!',
    });
  });

});
