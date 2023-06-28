const URL = 'https://api.mandarin.weniv.co.kr';

const useImage = () => {
  const UploadImgAPI = async formData => {
    try {
      const req = {
        method: 'POST',
        body: formData,
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

  return { UploadImgAPI, GetImgAPI };
};

export default useImage;
