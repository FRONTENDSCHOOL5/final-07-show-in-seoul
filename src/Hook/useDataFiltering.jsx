import { useEffect } from 'react';
import { InterestTags, AreaTags } from '../Atom/atom';
import { useRecoilValue } from 'recoil';

const useDataFiltering = (getShow, setShowData, interestTagCount, areaTagCount) => {
  const interastTags = useRecoilValue(InterestTags);
  const areaTags = useRecoilValue(AreaTags);

  useEffect(() => {
    let resultData = [...getShow];
    let trueList = [];
    if (interestTagCount || areaTagCount) {
      if (interestTagCount) {
        trueList = interastTags.filter(el => el[1] === true).map(tag => tag[0]);
        resultData = [
          ...getShow.filter(data => {
            return trueList.some(tag => tag === data.CODENAME);
          }),
        ];
      }
      if (areaTagCount) {
        trueList = areaTags.filter(el => el[1] === true).map(tag => tag[0]);
        resultData = [
          ...getShow.filter(data => {
            return trueList.some(tag => tag === data.GUNAME);
          }),
        ];
      }
    }
    setShowData(resultData);
  }, []);
};

export default useDataFiltering;
