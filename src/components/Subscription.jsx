import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Subscription() {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "₹ 199/month",
      features: [
        "HD available",
        "Watch on 1 device",
        "Unlimited movies and TV shows",
        "Cancel anytime"
      ]
    },
    {
      id: 2,
      name: "Standard",
      price: "₹ 499/month",
      features: [
        "Full HD available",
        "Watch on 2 devices",
        "Unlimited movies and TV shows",
        "Cancel anytime"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Premium",
      price: "₹ 649/month",
      features: [
        "Ultra HD available",
        "Watch on 4 devices",
        "Unlimited movies and TV shows",
        "Cancel anytime"
      ]
    }
  ];

  const { userSubscription, subscribe, isAuthenticated, cancelSubscription } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cancellationLoading, setCancellationLoading] = useState(false);
  const [cancellationSuccess, setCancellationSuccess] = useState(false);
  
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleSubscribe = async (plan) => {
    if (userSubscription && userSubscription.plan.id === plan.id) {
      setError('You are already subscribed to this plan');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      await subscribe(plan);
      setSelectedPlan(plan);
    } catch (err) {
      setError(err.message || 'Failed to subscribe');
    }
    
    setLoading(false);
  };

  const handleCancelSubscription = async () => {
    if (!userSubscription) return;
    
    try {
      setError('');
      setCancellationLoading(true);
      await cancelSubscription();
      setCancellationSuccess(true);
    } catch (err) {
      setError(err.message || 'Failed to cancel subscription');
    }
    
    setCancellationLoading(false);
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Choose Your Plan</h1>
        <p className="text-gray-400 text-center mb-12">Upgrade your experience with NetliTV</p>
        
        {userSubscription && !cancellationSuccess && (
          <div className="bg-green-900 text-green-100 p-4 rounded-md mb-8 text-center">
            <p>You are currently subscribed to the <span className="font-bold">{userSubscription.plan.name}</span> plan.</p>
            <p className="text-sm mt-2">Subscription ends on {new Date(userSubscription.endDate).toLocaleDateString()}</p>
            
            <div className="mt-4">
              <button
                onClick={handleCancelSubscription}
                disabled={cancellationLoading}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 disabled:opacity-50"
              >
                {cancellationLoading ? 'Cancelling...' : 'Cancel Subscription'}
              </button>
            </div>
          </div>
        )}
        
        {cancellationSuccess && (
          <div className="bg-red-900 text-red-100 p-4 rounded-md mb-8 text-center">
            <p>Your subscription has been cancelled successfully.</p>
            <p className="text-sm mt-2">You can subscribe again anytime.</p>
          </div>
        )}
        
        {error && (
          <div className="mb-8 p-3 bg-red-900 text-red-100 rounded-md text-center">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-stone-900 rounded-lg shadow-xl overflow-hidden border-2 ${
                plan.popular ? 'border-blue-500' : 'border-stone-800'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2">
                  <span className="font-bold">MOST POPULAR</span>
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
                <div className="text-3xl font-bold text-white mb-4">{plan.price}</div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {userSubscription && userSubscription.plan.id === plan.id ? (
                  <button 
                    className="w-full py-3 rounded-md font-medium bg-green-600 text-white cursor-default"
                  >
                    Current Plan
                  </button>
                ) : (
                  <button 
                    onClick={() => handleSubscribe(plan)}
                    disabled={loading}
                    className={`w-full py-3 rounded-md font-medium transition-colors duration-300 ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    } disabled:opacity-50`}
                  >
                    {loading && selectedPlan?.id === plan.id ? 'Processing...' : 'Select Plan'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan later?</h3>
              <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-stone-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">How do I cancel my subscription?</h3>
              <p className="text-gray-400">You can cancel your subscription anytime from your account settings. No hidden fees.</p>
            </div>
            <div className="bg-stone-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Is there a free trial?</h3>
              <p className="text-gray-400">Yes, all new users get a 30-day free trial to experience our service.</p>
            </div>
            <div className="bg-stone-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">We accept all major credit cards, debit cards, and popular digital payment methods.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-block bg-stone-800 hover:bg-stone-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}