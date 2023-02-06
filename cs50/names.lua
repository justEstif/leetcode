local function main()
	local names = {
		"Bill",
		"Charlie",
		"Fred",
		"George",
		"Ginny",
		"Percy",
		"Ron",
	}

	for key, value in pairs(names) do
		if value == "Ron" then
			print("Found", key, value)
			return
		end
	end
end

main()
