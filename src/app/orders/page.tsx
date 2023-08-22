"use client"
import { OrderType } from "@/types/types";
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

const OrdersPage = () => {

  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === 'unauthenticated')
    return router.push('/');


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      fetch('http://localhost:3000/api/orders').then(
        (res) => res.json(),
      ),
  })

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const status = form.elements[0].value;
    fetch(`http://localhost:3000/api/orders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
  }

  if (isLoading || status === "loading") return 'Loading...';

  return (
    <div className="p-4 lg:px-20 xl:px-40 bg-white text-black">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((order: OrderType) => (
              <tr className="text-sm md:text-base bg-red-50 text-gray-950" key={order.id}>
                <td className="hidden md:block py-6 px-1">{order.id}</td>
                <td className="py-6 px-1">{order.createdAt?.toString().slice(0, 10)}</td>
                <td className="py-6 px-1">{order.price}</td>
                <td className="hidden md:block py-6 px-1">{order.products[0].title}</td>
                {
                  session?.user.isAdmin ? (
                    <td className="py-6 px-1">
                      <form className="flex" onSubmit={(e) => handleUpdate(e, order.id)}>
                        <input placeholder={order.status} type="text" className="border-2 border-fuchsia-400 p-1" />
                        <button type="submit" className="bg-fuchsia-400 text-white relative h-10 w-10 p-2">
                          <img src="/edit.png" />
                        </button>
                      </form>
                    </td>
                  ) : (
                    <td className="py-6 px-1">{order.status}</td>
                  )
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;