const chatRoomsDiv = document.getElementById("chat-rooms");
const chatDiv = document.getElementById("chat");

// 채팅방 버튼 생성
chats.forEach((chatItem, index) => {
  const btn = document.createElement("button");
  btn.textContent = chatItem.artist;
  btn.onclick = () => {
    setActiveButton(btn);
    renderChat(chatItem.messages);
  };
  chatRoomsDiv.appendChild(btn);

  // 첫 번째 채팅방 자동 선택
  if (index === 0) {
    setActiveButton(btn);
    renderChat(chatItem.messages);
  }
});

function setActiveButton(activeBtn) {
  Array.from(chatRoomsDiv.children).forEach(btn => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}

// 메시지 렌더링 함수
function renderChat(messages) {
  chatDiv.innerHTML = "";
  let lastDate = "";

  messages.forEach(msg => {
    if (msg.date !== lastDate) {
      const dateLabel = document.createElement("div");
      dateLabel.className = "date-label";
      dateLabel.textContent = msg.date;
      chatDiv.appendChild(dateLabel);
      lastDate = msg.date;
    }

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble " + (msg.sender === "artist" ? "bubble-artist" : "bubble-user");

    if (msg.type === "text") {
      bubble.innerHTML = `<p>${msg.text}</p><span class="time-stamp">${msg.time}</span>`;
    } else if (msg.type === "image") {
      bubble.innerHTML = `<img src="${msg.src}" alt="이미지" style="max-width:100%; border-radius:12px; margin-bottom:4px;"><span class="time-stamp">${msg.time}</span>`;
    }

    chatDiv.appendChild(bubble);
  });

  // 스크롤 맨 아래 자동 이동
  chatDiv.scrollTop = chatDiv.scrollHeight;
}
