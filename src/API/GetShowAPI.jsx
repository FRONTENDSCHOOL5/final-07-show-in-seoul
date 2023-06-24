const GetShowAPI = async setShow => {
  try {
    const response = await fetch(
      'http://openapi.seoul.go.kr:8088/774c79676c79686f31303566616f7871/json/culturalEventInfo/1/1',
    );

    if (!response.ok) throw new Error('ERROR');

    const resArray = await response.json();
    const totalNum = resArray.culturalEventInfo.list_total_count;

    const loopCnt = Math.ceil(totalNum / 1000);

    const loadingList = [];
    for (let i = 0; i < loopCnt; i++) {
      const start = 1000 * i + 1;
      const end = start + 999;
      loadingList.push(
        fetch(
          `http://openapi.seoul.go.kr:8088/774c79676c79686f31303566616f7871/json/culturalEventInfo/${start}/${end}`,
        ).then(response => {
          if (!response.ok) throw new Error(`ERROR on ${i + 1}`);
          return response.json();
        }),
      );
    }

    const showResponses = await Promise.all(loadingList);

    const allShow = showResponses.flatMap(response => response.culturalEventInfo.row);

    setShow([...allShow]);
  } catch (e) {
    console.error(e);
  }
};

export default GetShowAPI;
