/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function Example() {
    return (
      <span className="relative z-0 inline-flex shadow-sm rounded-md">
        <span className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white">
          <label htmlFor="select-all" className="sr-only">
            Select all
          </label>
          <input
            id="select-all"
            type="checkbox"
            name="select-all"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
        </span>
        <label htmlFor="message-type" className="sr-only">
          Select message type
        </label>
        <select
          id="message-type"
          name="message-type"
          className="-ml-px block w-full pl-3 pr-9 py-2 rounded-l-none rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option>Unread messages</option>
          <option>Sent messages</option>
          <option>All messages</option>
        </select>
      </span>
    )
  }
  