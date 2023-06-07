export default function TrendingItem({ rank }: { rank: number }) {
  return (
    <>
      <div className=" sm:w-1/2 p-4">
        <div className="flex relative">
          <div className="px-8 py-10 absolute inset-0 w-full h-full object-cover object-center bg-white">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              {rank}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              고추장 냠냠 명언 글귀 냠냠
            </h1>
            <p className="leading-relaxed">#어디서 #들었는지</p>
          </div>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              {rank}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              글쓴이
            </h1>
            <p className="leading-relaxed">뭐 팔로우 수나 이런거 보여줄까</p>
          </div>
        </div>
      </div>
    </>
  );
}
