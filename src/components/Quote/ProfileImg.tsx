import { ExamIc } from "../../asset/icon/index";

import styled from "styled-components";
import tw from "twin.macro";

export default function ProfileImg() {
  return (
      <UserWrapper>
        <ExamIc />
      </UserWrapper>
  );
}

const UserWrapper = styled.div`
  ${tw`sticky top-32 flex h-12 w-16 items-center justify-center rounded-sm bg-indigo-500 md:h-14 md:w-20 md:rounded-sm`}
`;
