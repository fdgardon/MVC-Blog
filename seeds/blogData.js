const { seedBlog } = require('../models');

const blogdata = [
  {
      id:         "1",
      title:  "Workplan",
      post_text: "test"
     
  },
{     
      id:         "2",
      title:  "weekplan",
      post_text: "test2"
    
},
{
      id:         "3",
      title:  "monthplan",
      post_text: "test3"
    
},
];



module.exports = seedBlog;