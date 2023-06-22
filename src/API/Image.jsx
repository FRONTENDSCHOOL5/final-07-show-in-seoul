const URL = 'https://api.mandarin.weniv.co.kr';

const UploadImgAPI = async body => {
  try {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify({ ...body }),
    };

    const response = await fetch(URL + '/image/uploadfile', req);

    if (!response.ok) throw new Error('이미지 업로드 에러');

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

const GetImgAPI = async imgAddress => {
  try {
    const response = await fetch(imgAddress);

    if (!response.ok) throw new Error('이미지 가져오기 에러');

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

export { UploadImgAPI, GetImgAPI };
