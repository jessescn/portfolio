import { Post } from "../Post";

export class PostMockBuilder {
  private slug = "";
  private title = "";
  private excerpt = "";
  private updatedAt = "";

  withTitle(value: string) {
    this.title = value;
    return this;
  }

  withSlug(value: string) {
    this.slug = value;
    return this;
  }

  withExcerpt(value: string) {
    this.excerpt = value;
    return this;
  }

  withUpdatedAt(value: string) {
    this.updatedAt = value;
    return this;
  }

  build(): Post {
    return {
      excerpt: this.excerpt,
      slug: this.slug,
      title: this.title,
      updatedAt: this.updatedAt,
    };
  }
}
