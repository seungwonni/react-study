type Params = {
    params: {
        id: string;
    };
};

export default function PostDetailPage({ params }: Params) {
    const { id } = params;

    return (
        <main className="p-6">
            <h1 className="text-xl font-bold">게시글 상세 보기</h1>
            <p className="mt-4">📌 글 번호: {id}</p>
            <p className="mt-2">※ 이곳에 상세 내용을 불러올 수 있습니다.</p>
        </main>
    );
}
