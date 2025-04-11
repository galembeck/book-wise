import { BookOverview } from "@/components/book-overview";
import { BookList } from "@/components/book-list";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

import { sampleBooks } from "@/constants";

export default async function Home() {
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));

  return (
    <>
      <BookOverview {...sampleBooks[0]} />

      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
}
