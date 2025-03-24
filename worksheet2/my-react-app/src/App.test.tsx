import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  //ReactDOM.render(<App />, div);
  const root = createRoot(div!);
  root.render(<App />)

  //ReactDOM.unmountComponentAtNode(div);
  root.unmount();

}
)

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});
