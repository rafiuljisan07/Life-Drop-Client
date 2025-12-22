import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import axios from 'axios';

const SearchPage = () => {

    const [upazilas, setUpazilas] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [upazila, setUpazila] = useState('');
    const [district, setDistrict] = useState('');
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        axios.get('./upazilas.json')
            .then(res => {
                setUpazilas(res.data)
            })

        axios.get('./districts.json')
            .then(res => {
                setDistricts(res.data)

            })
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        setLoading(true)

        const bloodGroup = e.target.bloodGroup.value;
        const district = e.target.district.value;
        const upazila = e.target.upazila.value;

        // FormData = {
        //     bloodGroup,
        //     district,
        //     upazila
        // };

        axios.get(`http://localhost:3000/search-requests?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`)
            .then(res => {
                setSearchResults(res.data);
                setLoading(false)
            })

        // Mock data for now
        // setTimeout(() => {
        //     setSearchResults([
        //         {
        //             _id: '1',
        //             name: 'John Doe',
        //             bloodGroup: 'A+',
        //             district: 'Dhaka',
        //             upazila: 'Dhaka',
        //             lastDonation: '2024-01-15',
        //             available: true
        //         },
        //         {
        //             _id: '2',
        //             name: 'Jane Smith',
        //             bloodGroup: 'O+',
        //             district: 'Dhaka',
        //             upazila: 'Savar',
        //             lastDonation: '2024-01-10',
        //             available: true
        //         }
        //     ])
        // }, 1000)

    }

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        {/* Search Form */}
                        <div className="card mb-8">
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Blood Donors</h1>
                                <p className="text-gray-600">Search for available blood donors in your area</p>
                            </div>

                            <form onSubmit={handleSearch} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Blood Group */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                                        <select
                                            name='bloodGroup'
                                            required
                                            className="select w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                                            <option value="">Select Blood Group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>

                                    {/* District */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                                        <select
                                            name='district'
                                            value={district}
                                            onChange={e => setDistrict(e.target.value)}
                                            className="select w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500" >
                                            <option value="">Select District</option>
                                            {
                                                districts.map(d => <option value={d?.name} key={d.id}>{d?.name}</option>)
                                            }
                                        </select>
                                    </div>

                                    {/* Upazila */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Upazila</label>
                                        <select
                                            value={upazila}
                                            name='upazila'
                                            onChange={e => setUpazila(e.target.value)}
                                            className="select w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500">
                                            <option value="">Select Upazila</option>
                                            {
                                                upazilas.map(u => <option value={u?.name} key={u.id}>{u?.name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary flex items-center space-x-2 px-8"
                                    >
                                        {loading ? (
                                            <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <Search size={20} />
                                                <span>Search Donors</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Search Results */}
                        {searchResults.length > 0 && (
                            <div className="card">
                                <h2 className="text-2xl font-bold mb-6">Available Donors</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {searchResults.map(donor => (
                                        <div key={donor._id} className="border-2 bg-blue-50  border-red-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">{donor.name}</h3>
                                                    <p className="text-gray-600">{donor.district}, {donor.upazila}</p>
                                                </div>
                                                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                                    {donor.bloodGroup}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Status:</span>
                                                <span className={`font-medium ${donor.status ? 'text-green-600' : 'text-red-600'}`}>
                                                    {donor.status ? 'active' : 'blocked'}
                                                </span>
                                            </div>
                                            <button className="btn-primary w-full">
                                                Contact Donor
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* No Results */}
                        {searchResults.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">No donors found matching your criteria</div>
                                <div className="text-gray-500">Try adjusting your search parameters</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage