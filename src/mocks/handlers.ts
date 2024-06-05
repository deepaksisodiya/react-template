import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://dummyjson.com/todos', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      todos: [
        {
          id: 1,
          todo: 'Do something nice for someone you care about',
          completed: false,
          userId: 152
        },
        {
          id: 2,
          todo: 'Memorize a poem',
          completed: true,
          userId: 13
        },
        {
          id: 3,
          todo: 'Watch a classic movie',
          completed: true,
          userId: 68
        }
      ],
      total: 200,
      skip: 0,
      limit: 30
    });
  })
];
