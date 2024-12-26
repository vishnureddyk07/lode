import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  Timestamp,
  DocumentData,
  FirestoreError
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './useAuth';

interface FirestoreState<T> {
  items: T[];
  loading: boolean;
  error: string | null;
}

export function useFirestore<T extends DocumentData>(collectionName: string) {
  const [state, setState] = useState<FirestoreState<T>>({
    items: [],
    loading: true,
    error: null
  });
  
  const { user } = useAuth();

  useEffect(() => {
    let unsubscribe: () => void;

    const fetchData = async () => {
      try {
        const q = query(
          collection(db, collectionName),
          orderBy('createdAt', 'desc')
        );
        
        unsubscribe = onSnapshot(
          q, 
          (snapshot) => {
            const documents = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })) as T[];

            setState({
              items: documents,
              loading: false,
              error: null
            });
          },
          (error: FirestoreError) => {
            console.error('Firestore error:', error);
            setState(prev => ({
              ...prev,
              loading: false,
              error: `Failed to load data: ${error.message}`
            }));
          }
        );
      } catch (err) {
        console.error('Firestore setup error:', err);
        setState(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to connect to database'
        }));
      }
    };

    fetchData();
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [collectionName]);

  const addItem = async (data: Partial<T>) => {
    if (!user) {
      throw new Error('Must be logged in to add items');
    }

    try {
      // Validate required fields based on collection
      const requiredFields = getRequiredFields(collectionName);
      const missingFields = requiredFields.filter(field => !(field in data));
      
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      const docData = {
        ...data,
        createdAt: Timestamp.now(),
        userId: user.uid,
        userEmail: user.email,
        updatedAt: Timestamp.now()
      };

      const docRef = await addDoc(collection(db, collectionName), docData);
      return docRef.id;
    } catch (err) {
      console.error('Error adding document:', err);
      throw new Error(err instanceof Error ? err.message : 'Failed to add item');
    }
  };

  return { 
    items: state.items, 
    loading: state.loading, 
    error: state.error, 
    addItem 
  };
}

function getRequiredFields(collectionName: string): string[] {
  switch (collectionName) {
    case 'articles':
      return ['title', 'content', 'category'];
    case 'events':
      return ['title', 'description', 'date', 'location'];
    case 'gallery':
      return ['title', 'imageUrl'];
    case 'podcasts':
      return ['title', 'description', 'type', 'url'];
    default:
      return [];
  }
}