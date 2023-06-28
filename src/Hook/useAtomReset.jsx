import {
  Token,
  MyAccountName,
  IsLoginState,
  Show,
  CategoryInterestTagCount,
  CategoryAreaTagCount,
  InterestTags,
  AreaTags,
} from '../Atom/atom';
import { useResetRecoilState } from 'recoil';

const useAtomReset = () => {
  const resetToken = useResetRecoilState(Token);
  const resetMyAccountName = useResetRecoilState(MyAccountName);
  const resetIsLoginState = useResetRecoilState(IsLoginState);
  const resetShow = useResetRecoilState(Show);
  const resetCategoryInterestTagCount = useResetRecoilState(CategoryInterestTagCount);
  const resetCategoryAreaTagCount = useResetRecoilState(CategoryAreaTagCount);
  const resetInterestTags = useResetRecoilState(InterestTags);
  const resetAreaTags = useResetRecoilState(AreaTags);

  const resetAllAtoms = () => {
    resetToken();
    resetMyAccountName();
    resetIsLoginState();
    resetShow();
    resetCategoryInterestTagCount();
    resetCategoryAreaTagCount();
    resetInterestTags();
    resetAreaTags();
  };

  return resetAllAtoms;
};

export default useAtomReset;
