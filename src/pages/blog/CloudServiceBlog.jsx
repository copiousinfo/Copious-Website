import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function CloudServiceBlog() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[120px] pb-20 bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <p className="text-[#374151] text-lg leading-relaxed mb-8">
          Flexible, secure, Accessibility, Scalability, Cost-Effectiveness, Data
          Backup and Recovery, Collaboration, Automatic Updates, Integration
          with Other Services and efficient solution for storing and managing
          data, making it an essential component of modern IT infrastructure.{" "}
          <Link
            to="/services/cloud-service"
            className="text-[#da251d] font-bold underline hover:text-[#c02019] transition-colors"
          >
            Cloud Service
          </Link>{" "}
          are provided by Copious.
        </p>
      </div>
    </div>
  );
}
