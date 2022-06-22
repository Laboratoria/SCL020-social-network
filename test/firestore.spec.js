import {
  describe, expect, it, vi,
} from 'vitest';
import {
  addDoc, onSnapshot, query, collection, orderBy, doc, updateDoc, deleteDoc, where, getDoc, arrayRemove, arrayUnion
} from 'firebase/firestore';
import {
  createPost, readingPost, editPost, deletePost, profilePosts, mapPosts, likingPost
} from '../src/firebase/firestore.js';
import { db } from '../src/firebase/init.js';

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  addDoc: vi.fn(),
  onSnapshot: vi.fn(),
  query: vi.fn(),
  collection: vi.fn(),
  orderBy: vi.fn(),
  updateDoc: vi.fn(),
  doc: vi.fn(),
  deleteDoc: vi.fn(),
  where: vi.fn(),
  getDoc: vi.fn(),
  arrayRemove: vi.fn(),
  arrayUnion: vi.fn(),
}));

// readingPost function -- DONE
describe('Tests for the readingPost function', () => {
  const callback = 'someCallbackFunction';

  it('Should call onSnapshot', () => {
    readingPost(callback);
    expect(onSnapshot).toHaveBeenCalled();
  });
  it('Should call onSnapshot with the query reference argument', () => {
    const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
    readingPost(callback);
    expect(onSnapshot).toHaveBeenCalledWith(q, (callback));
  });
});

// editPost function - DONE
describe('Tests for the editPost function', () => {
  const id = '';
  const review = '';
  const movie = '';
  const country = '';

  it('Should call updateDoc', async () => {
    await editPost(id, review, movie, country);
    expect(updateDoc).toHaveBeenCalled();
  });
  it('Should call updateDoc with the postRef and review, movie, country arguments', async () => {
    const postRef = doc(db, 'posts', id);
    await editPost(id, review, movie, country);
    expect(updateDoc).toHaveBeenCalledWith(postRef, {
      review,
      movie,
      country,
    });
  });
});

// deletePost function - DONE
describe('Tests for the deletePost function', () => {
  const id = 'someRandomStringOfCharacters';

  it('Should call deleteDoc', async () => {
    await deletePost(id);
    expect(deleteDoc).toHaveBeenCalled();
  });
  it('Should call deleteDoc with the postRef argument', async () => {
    const postRef = doc(db, 'posts', id);
    await deletePost(id);
    expect(deleteDoc).toHaveBeenCalledWith(postRef);
  });
});

// profilePosts function
/* describe('Tests for the profilePosts function', () => {
  const callback = 'someCallbackFunction';
  const userId = 'someRandomStringofChars';

  it('Should call onSnapshot', async () => {
    await profilePosts(callback);
    expect(onSnapshot).toHaveBeenCalled();
  });
  it('Should call onSnapshot with the query reference argument', async () => {
    const q = query(collection(db, 'posts'), where('userId', '==', userId), orderBy('date', 'desc'));
    await profilePosts(callback);
    expect(onSnapshot).toHaveBeenCalledWith(q, (callback));
  });
}); */

// MapPost function - DONE
describe('Tests for the mapPost function', () => {
  const callback = 'someCallbackFunction';
  const countryName = 'someCountryName';

  it('Should call onSnapshot', () => {
    mapPosts(countryName, callback);
    expect(onSnapshot).toHaveBeenCalled();
  });
  it('Should call onSnapshot with the query reference argument', () => {
    const q = query(collection(db, 'posts'), where('country', '==', countryName), orderBy('date', 'desc'));
    mapPosts(countryName, callback);
    expect(onSnapshot).toHaveBeenCalledWith(q, (callback));
  });
});

// LikingPost function
describe('Tests for the likingPost function', () => {
  const id = '';

  it('Should call upDateDoc', async () => {
    await likingPost(id);
    expect(updateDoc).toHaveBeenCalled();
  });
});