const About = () => {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Ai là Bảo?</h1>
      <p className="text-lg text-gray-800 leading-relaxed mb-6 text-justify">
        Bảo, hay còn gọi với biệt danh thân mật là "Bảo Trùm Bug", là một chàng
        trai sở hữu combo hiếm có: sáng ngủ nướng, trưa fix bug, tối ăn mì,
        khuya ngồi ngắm console log. Trong giới dev, người ta đồn rằng nếu bug
        có hình dạng vật lý, thì Bảo đã đấm nhau với nó từ project đầu tiên.
      </p>

      <p className="text-lg text-gray-800 leading-relaxed mb-6 text-justify">
        Bảo bắt đầu sự nghiệp lập trình từ năm lớp... không ai nhớ. Chỉ biết là
        từ khi biết đến React, cuộc đời anh sang một trang mới — trang đó đang
        loading vì chưa gọi xong API. Anh từng thề sẽ học clean code, nhưng rồi
        lại quăng hết promise để chạy deadline kịp deploy.
      </p>

      <p className="text-lg text-gray-800 leading-relaxed mb-6 text-justify">
        Ngoài lập trình, Bảo còn là một “chuyên gia Google” – với tốc độ tìm
        Stack Overflow nhanh như cách deadline tới. Anh tâm niệm: "Code không
        chạy thì cứ F5 mạnh mẽ. Không được thì xóa node_modules, vẫn không được
        thì... nghỉ một hôm cho tỉnh táo".
      </p>

      <p className="text-lg text-gray-800 leading-relaxed mb-6 text-justify">
        Tuy bề ngoài có vẻ là một lập trình viên lạnh lùng (vì ngồi dưới máy
        lạnh cả ngày), nhưng bên trong Bảo là một trái tim nóng bỏng dành cho UI
        đẹp, UX mượt, và code không có `console.log()`. Anh có ước mơ xây dựng
        một dự án để đời, nơi mọi bug đều biết điều và không dám xuất hiện.
      </p>

      <p className="text-lg text-gray-800 leading-relaxed text-justify">
        Với kinh nghiệm dày dạn (vì đi muộn bị dặn hoài), và tinh thần luôn học
        hỏi (Google mỗi ngày), Bảo đang trên hành trình trở thành "Front-end
        Sorcerer" — người mà chỉ cần nhìn CSS là nó tự căn giữa.
      </p>

      <div className="mt-10 text-center text-sm text-gray-500">
        P/s: Nếu bạn thấy trang này lỗi hiển thị, thì... chắc do trình duyệt chứ
        không phải tại Bảo 😎.
      </div>
    </div>
  );
};

export default About;
