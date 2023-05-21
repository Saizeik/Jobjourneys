import type {User, Post } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Post };

export async function getPostListings({ userId }: { userId: User["id"] }) {
    return prisma.post.findMany({
      where: { userId },
      select: {
        slug: true,
        title: true,
        address: true,
        date:true,
       userId:true,
       jobAppLink: true, 
       appStatus: true,
       coordinateLat:true,
       coordinateLong:true,
      },
    
      orderBy: { updatedAt: "asc" }, 
    });
  }

  export async function adminGetPostListings(){
    return prisma.post.findMany({
     select: {
        slug: true,
        title: true,
        address: true,
        jobAppLink:true,
        appStatus: true,
        date:true,
        userId: true,
        User:true,
        
       
  }
})
  }

export async function getPosts() {
    return prisma.post.findMany();
  }

  export async function getPost(slug: string) {
    return prisma.post.findUnique({ where: { slug } });
  }

  export async function createPost(post: Pick<Post, 'slug'| 'title' | 'address'| 'date'| 'jobAppLink'|'appStatus'|'coordinateLat'|'coordinateLong'| 'markdown' |'userId'>){
    return prisma.post.create({data:post})
  }

  export async function updatePost(slug: string, post: Pick<Post, 'slug'| 'title' | 'address'| 'date'|  'jobAppLink'| 'appStatus'| 'coordinateLat'|'coordinateLong'| 'markdown'| 'userId'
  >){
    return prisma.post.update({data:post, where:{slug}});
  }

  export async function deletePost(slug:string){
    return prisma.post.delete({where:{slug}});
  }