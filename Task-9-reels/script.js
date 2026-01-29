const reels = [
  {
    ismuted: true,
    username: "travel_with_raj",
    likeCount: 12450,
    isLiked: true,
    commentCount: 342,
    caption: "Morning vibes from the mountains 🏔️✨",
    video: "./reels/2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 210,
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "foodie_neha",
    likeCount: 8930,
    isLiked: false,
    commentCount: 189,
    caption: "Street food that hits different 😋🔥",
    video: "./reels/1.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
    shareCount: 98,
    isFollowed: false,
  },
  {
    ismuted: true,
    username: "fit_aman",
    likeCount: 15670,
    isLiked: true,
    commentCount: 512,
    caption: "Consistency beats motivation 💪",
    video: "./reels/3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/18.jpg",
    shareCount: 320,
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "daily_quotes",
    likeCount: 22100,
    isLiked: false,
    commentCount: 640,
    caption: "Work in silence, let success make the noise ✨",
    video: "./reels/4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/65.jpg",
    shareCount: 540,
    isFollowed: false,
  },
  {
    ismuted: true,
    username: "tech_by_kunal",
    likeCount: 7640,
    isLiked: true,
    commentCount: 204,
    caption: "JavaScript tip you should know 🚀",
    video: "./reels/5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/50.jpg",
    shareCount: 180,
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "nature_love",
    likeCount: 18900,
    isLiked: false,
    commentCount: 410,
    caption: "Peace is found in nature 🌿💚",
    video: "./reels/6.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 390,
    isFollowed: false,
  },
  {
    ismuted: true,
    username: "dance_with_me",
    likeCount: 13200,
    isLiked: true,
    commentCount: 298,
    caption: "When music takes control 🎶🔥",
    video: "./reels/7.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/29.jpg",
    shareCount: 260,
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "street_photography",
    likeCount: 9450,
    isLiked: false,
    commentCount: 173,
    caption: "Every street has a story 📸",
    video: "./reels/8.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/41.jpg",
    shareCount: 145,
    isFollowed: false,
  },
  {
    ismuted: true,
    username: "life_of_sam",
    likeCount: 6700,
    isLiked: true,
    commentCount: 121,
    caption: "Simple life, happy mind 🙂",
    video: "./reels/9.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/7.jpg",
    shareCount: 88,
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "art_daily",
    likeCount: 15890,
    isLiked: false,
    commentCount: 367,
    caption: "Creativity is intelligence having fun 🎨",
    video: "./reels/10.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/53.jpg",
    shareCount: 305,
    isFollowed: false,
  },
];

var allReels = document.querySelector(".all-reels");

function addData() {
  var sum = "";

  reels.forEach(function (elem, idx) {
    sum = sum +`<div class="reel">
                    <video autoplay loop ${elem.ismuted?'muted':''} src="${elem.video}"></video>
                    <div class="mute" id="${idx}">
                        ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}  
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h2>${elem.username}</h2>
                            <button id="${idx}" class="follow">${elem.isFollowed ? "Unfollwed" : "Follow"}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like">
                            <h4 class="like-icon">${elem.isLiked ? '<i class=" ri-heart-3-line">' : '<i class="love ri-heart-3-fill"></i>'}</i></h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment-icon">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share-icon">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`;
  });

  allReels.innerHTML = sum;
}

addData()

allReels.addEventListener("click",function(dets){
    
    if(dets.target.className == 'like'){
        if(!reels[dets.target.id].isLiked){
            reels[dets.target.id].likeCount++
            reels[dets.target.id].isLiked = true
        }else{
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false
        }
        addData();
    }
    if(dets.target.className == 'follow'){
        if(!reels[dets.target.id].isFollowed){
            reels[dets.target.id].isFollowed = true
        }else{
            reels[dets.target.id].isFollowed = false
        }
        addData();
    }
    if(dets.target.className == 'mute'){
        if(!reels[dets.target.id].ismuted){
            reels[dets.target.id].ismuted = true
        }else{
            reels[dets.target.id].ismuted = false
        }
        addData();
    }
    
})