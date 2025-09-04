const chats = [
  {
    artist: "유우시",
    messages: [
      // 최초 메시지
      { sender: "artist", type: "text", text: "오늘 뭐 했어?", time: "오후 2:10", date: "2025년 9월 4일" },
      { sender: "user", type: "text", text: "학교 다녀왔어!", time: "오후 2:12", date: "2025년 9월 4일" },

      // 1일 후 이미지 메시지 추가
      { sender: "artist", type: "image", src: "images/sample1.jpg", time: "오후 2:13", date: "2025년 9월 5일" },

      // 3일 후 새로운 메시지 + 이모티콘
      { sender: "user", type: "text", text: "우와 😍", time: "오후 3:00", date: "2025년 9월 7일" }
    ]
  },
  {
    artist: "리쿠",
    messages: [
      { sender: "artist", type: "text", text: "라멘 맛있게 먹었어?", time: "오후 3:00", date: "2025년 9월 4일" },
      { sender: "user", type: "text", text: "응! 최고였어!", time: "오후 3:05", date: "2025년 9월 4일" },
      { sender: "artist", type: "image", src: "images/sample2.jpg", time: "오후 3:06", date: "2025년 9월 4일" }
    ]
  }
];
