import React from 'react';
import Link from 'next/link';

interface Post {
    id: number;
    title: string;
    author: string;
    date: string;
    comments: number;
}

const dummyPosts: Post[] = [
    { id: 1, title: '첫 번째 게시글', author: '김철수', date: '2025-04-20', comments: 5 },
    { id: 2, title: '두 번째 게시글', author: '이영희', date: '2025-04-19', comments: 2 },
    { id: 3, title: '세 번째 게시글', author: '박민수', date: '2025-04-18', comments: 12 },
];

export default function BoardPage() {
    return (
        <main className="max-w-5xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-semibold mb-6">📋 커뮤니티 게시판</h1>
            <table className="min-w-full border border-gray-200 rounded-md overflow-hidden shadow-md">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">#</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">제목</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">작성자</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">작성일</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">댓글</th>
                </tr>
                </thead>
                <tbody>
                {dummyPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 border-t">{post.id}</td>
                        <td className="px-4 py-3 border-t text-blue-600 hover:underline">
                            <Link href={`/dashboard/${post.id}`}>{post.title}</Link>
                        </td>
                        <td className="px-4 py-3 border-t">{post.author}</td>
                        <td className="px-4 py-3 border-t text-sm text-gray-500">{post.date}</td>
                        <td className="px-4 py-3 border-t text-sm text-gray-500">{post.comments} 개</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </main>
    );
}
