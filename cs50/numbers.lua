local numbers = { 4, 6, 8, 2, 7, 5, 0 }

function linear_search()
	for key, value in pairs(numbers) do
		if value == 0 then
			print("Found\n")
			return 0
		end
	end
	print("Not found\n")
	return 1
end

local result = linear_search()
print(result)
