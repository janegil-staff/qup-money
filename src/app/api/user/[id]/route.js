import { NextResponse } from 'next/server';
import User from '@/models/User'; // Your Mongoose User model
import connectToDB from '@/lib/db'; // DB connection helper


export async function GET(req, { params }) {
  await connectToDB();

  try {
    const user = await User.findById(params.id).select('-password');

    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
  }
}

export async function PUT(req, { params }) {
  await connectToDB();
  const body = await req.json();
  try {
    const updatedUser = await User.findByIdAndUpdate(params.id, body, { new: true });
    if (!updatedUser) return NextResponse.json({ error: 'User not found' }, { status: 404 });
    return NextResponse.json(updatedUser);
  } catch (err) {
    return NextResponse.json({ error: 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(req, { params }) {
  await connectToDB();
  try {
    const deletedUser = await User.findByIdAndDelete(params.id);
    if (!deletedUser) return NextResponse.json({ error: 'User not found' }, { status: 404 });
    return NextResponse.json({ message: 'User deleted' });
  } catch (err) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 400 });
  }
}
