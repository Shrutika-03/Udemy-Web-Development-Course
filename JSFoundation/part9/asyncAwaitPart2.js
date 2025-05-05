function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetch");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetch...");
    }, 3000);
  });
}

async function getLogData() {
  try {
    console.log("fetching log data...");
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);

    console.log("fetch complete");
  } catch (error) {
    console.log("error fetcing log data");
  }
}

getLogData();
