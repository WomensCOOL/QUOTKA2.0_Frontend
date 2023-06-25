export default function TrendingItem({ rank }: { rank: number }) {
  return (
    <>
      <div className=" sm:w-1/2 pl-1 pr-1 pb-2">
        <div className="flex relative h-[6rem]">
          <div className="px-7 py-3 absolute inset-0 w-full h-full object-cover object-center bg-[#FCD34D] bg-opacity-40 rounded-sm">
            <h2 className="tracking-widest text-sm title-font font-medium text-white">
              {rank}
            </h2>
            <h1 className="title-font text-lg font-medium text-white">
              고추장 냠냠 명언 글귀 냠냠
            </h1>
            <p className="leading-relaxed text-gray-400">#어디서 #들었는지</p>
          </div>
          <div className="px-7 py-3 relative z-10 w-full bg-[#212121] opacity-0 hover:opacity-100 rounded-sm">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-100 ">
              {rank}
            </h2>
            <h1 className="title-font text-lg font-medium text-white">
              글쓴이
            </h1>
            <p className="leading-relaxed">뭐 팔로우 수나 이런거 보여줄까</p>
          </div>
        </div>
      </div>
    </>
  );
}
